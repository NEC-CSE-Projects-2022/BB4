import torch
import math
import random

def cyclic_strength(epoch, T=10, mmin=0.02, mmax=0.15):
    return mmin + (mmax - mmin) * (1 + math.sin(2 * math.pi * epoch / T)) / 2

def cyclic_augment(volume, epoch):
    # volume: (B,1,64,64,64)
    mag = cyclic_strength(epoch)

    if random.random() < 0.5:
        volume = torch.rot90(volume, k=1, dims=[3,4])  # H,W

    noise = mag * torch.randn_like(volume)
    volume = torch.clamp(volume + noise, 0.0, 1.0)

    return volume
