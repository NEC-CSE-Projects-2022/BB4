import torch
from torch.utils.data import Dataset
import numpy as np

class Medical3DDataset(Dataset):
    def __init__(self, npz_path, split="train"):
        data = np.load(npz_path)

        if split == "train":
            self.X = data["train_images"]
            self.y = data["train_labels"]
        elif split == "val":
            self.X = data["val_images"]
            self.y = data["val_labels"]
        else:
            self.X = data["test_images"]
            self.y = data["test_labels"]

    def __len__(self):
        return len(self.X)

    def __getitem__(self, idx):
        volume = self.X[idx]           # (64,64,64)
        label  = self.y[idx]

        # uint8 → float
        volume = torch.tensor(volume, dtype=torch.float32)

        # normalize to 0–1
        volume = volume / 255.0

        # add channel dim → (1,64,64,64)
        volume = volume.unsqueeze(0)

        return volume, torch.tensor(label).long()
