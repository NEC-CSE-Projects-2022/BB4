### 🧠 MedMNIST (3D) Dataset — Preview & Downloa

---

## 🔎 Overview

- Name: MedMNIST (3D Subsets)
- Total Samples: 3,492 volumetric images
- Datasets Used:
    - **AdrenalMNIST3D**
    - **VesselMNIST3D**

- Image Type: 3D medical volumes (CT/MRI slices)
- Classes: Healthy / Diseased
- Source: Zenodo (official MedMNIST repository)

**used for:**
- Biomedical image classification
- Disease detection
- 3D medical image analysis
- Clinical decision support systems

---

## 🔗 Download

**📥 Zenodo (Official – MedMNIST Dataset)**
```bash
https://zenodo.org/records/10519652
```

**Zenodo CLI**
```bash
wget https://zenodo.org/records/10519652/files/medmnist_3d.zip
```
**Extract**
```bash
unzip medmnist_3d.zip
```

---

## 📦 Dataset Contents & Structure

**Recommended Folder Structure**

```

Datasets/
│
├── adrenalmnist3d/
│   ├── train/
│   ├── val/
│   ├── test/
│
├── vesselmnist3d/
│   ├── train/
│   ├── val/
│   ├── test/
│
├── labels.npy
│
└── README.md


```

### 📄 Files Description

**adrenalmnist3d/**

- Contains 3D adrenal medical image volumes

- Stored as stacked 2D slices

- Grayscale biomedical images

- Used for adrenal disease classification

**vesselmnist3d/**

- Contains 3D vessel medical image volumes

- Stored as stacked 2D slices

- Grayscale biomedical images

- Used for vessel disease classification

**labels.npy**

- Contains ground-truth labels for each volume:

   - 0 → Healthy
   - 1 → Diseased

**README.md**

- Dataset description

- Usage instructions

- Preprocessing details

- Citation information

---

## ℹ️ About the Data


### 🧠 Context

This dataset contains real-world biomedical 3D medical images commonly used in:

- Disease classification

- Biomedical image analysis

- Early-stage disease detection

- Clinical decision support systems

### 📊 Content

- High-quality 3D volumetric medical images

- CT/MRI-based biomedical scans

- Grayscale medical imagery

- Labeled datasets for Healthy vs Diseased classification

### 💡 Inspiration

Designed to support medical AI and deep learning research,
with a focus on automated diagnosis, faster detection, and AI-assisted healthcare systems.

### 🙏 Acknowledgements

- Dataset provided by the MedMNIST research community

- Original source: MedMNIST Dataset (Zenodo Repository)

--- 

## ⚙️ Usage Examples

### 🐍 PyTorch + MONAI

``` python
from monai.transforms import (
    Compose,
    LoadImage,
    AddChannel,
    Resize,
    NormalizeIntensity
)
from monai.data import Dataset, DataLoader

transforms = Compose([
    LoadImage(image_only=True),
    AddChannel(),
    Resize((224, 224, 224)),
    NormalizeIntensity()
])

dataset = Dataset(data=image_list, transform=transforms)
loader = DataLoader(dataset, batch_size=16, shuffle=True)

```

