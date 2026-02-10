import torch
import torch.nn.functional as F
from model import ResNet3D50

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

def load_model(model_path="model.pth"):
    model = ResNet3D50(num_classes=2)
    model.load_state_dict(torch.load(model_path, map_location=DEVICE))
    model.to(DEVICE)
    model.eval()
    return model

def predict_volume(model, volume):
    """
    volume: torch.Tensor (1, 64, 64, 64)
    """

    volume = volume.unsqueeze(0).to(DEVICE)  # (1,1,64,64,64)

    with torch.no_grad():
        logits = model(volume)          # raw output
        probs = F.softmax(logits, dim=1)  # ✅ probabilities

        confidence, pred = torch.max(probs, dim=1)

    return pred.item(), confidence.item() * 100
