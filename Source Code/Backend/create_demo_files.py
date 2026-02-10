import numpy as np

data = np.load("adrenalmnist3d_64 .npz")
X = data["test_images"]
y = data["test_labels"]

healthy_idx = int(np.where(y == 0)[0][0])
diseased_idx = int(np.where(y == 1)[0][0])

np.savez("healthy_case.npz", volume=X[healthy_idx], index=healthy_idx)
np.savez("diseased_case.npz", volume=X[diseased_idx], index=diseased_idx)

print("Healthy index:", healthy_idx)
print("Diseased index:", diseased_idx)
