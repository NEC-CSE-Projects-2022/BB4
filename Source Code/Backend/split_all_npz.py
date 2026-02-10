import numpy as np
import os

DATA_PATH = "adrenalmnist3d_64 .npz"
data = np.load(DATA_PATH)

images = data["test_images"]
labels = data["test_labels"]

HEALTHY_DIR = "healthy_npz"
DISEASED_DIR = "diseased_npz"

os.makedirs(HEALTHY_DIR, exist_ok=True)
os.makedirs(DISEASED_DIR, exist_ok=True)

healthy_count = 0
diseased_count = 0

for idx in range(len(labels)):
    volume = images[idx]
    label = int(labels[idx].item())   # 🔥 FIXED LINE

    if label == 0:
        np.savez(f"{HEALTHY_DIR}/healthy_{healthy_count}.npz",
                 volume=volume, index=idx)
        healthy_count += 1

    elif label == 1:
        np.savez(f"{DISEASED_DIR}/diseased_{diseased_count}.npz",
                 volume=volume, index=idx)
        diseased_count += 1

print("✅ DONE SUCCESSFULLY")
print(f"🟢 Healthy samples saved  : {healthy_count}")
print(f"🔴 Diseased samples saved : {diseased_count}")
