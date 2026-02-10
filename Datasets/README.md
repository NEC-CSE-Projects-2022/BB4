### 🧠 MedMNIST (3D) Dataset — Preview & Downloa

---

## 🔎 Overview

Name: MedMNIST (3D Subsets)
Total Samples: 3,492 volumetric images
Datasets Used:

**AdrenalMNIST3D**

**VesselMNIST3D**

Image Type: 3D medical volumes (CT/MRI slices)
Classes: Healthy / Diseased
Source: Zenodo (official MedMNIST repository)
Used for:

Biomedical image classification

Disease detection

3D medical image analysis

Clinical decision support systems

## 🔗 Download

**📥 Zenodo (Official – MedMNIST Dataset)**

https://zenodo.org/records/10519652

**Zenodo CLI**

wget https://zenodo.org/records/10519652/files/medmnist_3d.zip

**Extract**

unzip medmnist_3d.zip

---

## 📦 Dataset Contents & Structure

**Recommended Folder Structure**

**📄 Files Description**
adrenalmnist3d/

Contains 3D adrenal medical image volumes

Stored as stacked 2D slices

Grayscale biomedical images

Used for adrenal disease classification

vesselmnist3d/

Contains 3D vessel medical image volumes

Stored as stacked 2D slices

Grayscale biomedical images

Used for vessel disease classification

**labels.npy**

Contains ground-truth labels for each volume:

0 → Healthy

1 → Diseased

**README.md**

Dataset description

Usage instructions

Preprocessing details

Citation information
