### 🧠 TransAugNet — Transformer-Aware Cyclic Augmentation for Biomedical Image Analysis

Repository for TransAugNet, a deep learning–based biomedical image analysis framework that enables accurate and fast disease detection from 3D medical images using ResNet3D-50 and Transformer-Aware Cyclic Augmentation.

---

## 📌 Summary

### Two main Objectives:

1. 🩺 Disease Classification
   → Automatically classify medical images as Healthy / Diseased

2. ⏱️ Fast Diagnosis Support 
   → Reduce diagnosis time from minutes to seconds for clinical decision support

---

## 🔑 Key Components

- ResNet3D-50 → 3D volumetric feature extraction (encoder)

- Transformer-Aware Cyclic Augmentation → Robust feature learning

- Intensity Level Regulation (ILR) → Stable training & reduced overfitting

- Cross-Entropy Loss → Binary classification

- MONAI + PyTorch → Medical deep learning framework

- Flask → Deployment interface

## 📂 Repository Contents

- CAMERA_READY_PAPER.pdf
→ Final research paper explaining TransAugNet methodology and results

- BB4_ABSTRACT.pdf
→ Project abstract and overview

- BB4_CONF.pptx
→ Conference presentation

- BB4_COLLEGE_REVIEW.pptx
→ Internal review presentation

- BB4_PROJECT_DOCUMENT.pdf
→ Complete project documentation (design, implementation, experiments)

---

## 🧠 Quick System Description

### Input (Image)

User uploads CT/MRI volume
→ Preprocessing (3D → 2D slices)
→ Cyclic Augmentation + ILR
→ ResNet3D-50 feature extraction
→ Disease classification
→ Prediction output (Healthy / Diseased)


---

## ⚙️ Workflow

3D Medical Image
→ Preprocessing
→ Cyclic Augmentation
→ ResNet3D-50 Encoder
→ Classification Layer
→ Prediction Output


---


## 🗂 Dataset Used

- AdrenalMNIST3D
- VesselMNIST3D

Used for:

   - Biomedical image classification
   
   - Disease detection
   
   - Medical AI research

---

## 🧰 Models & Tools


- ResNet3D-50

- Transformer Attention

- Cyclic Augmentation + ILR

- PyTorch

- MONAI

- NumPy

- Pandas

- Matplotlib

- Flask

---

## 💻 Environment & Hardware

### Software
- Python 3.x
- Google Colab (GPU)
- Jupyter Notebook
- OS: Windows 10 or later

### Hardware
- Intel Core i5 or above
- RAM: 8GB+
- GPU: NVIDIA (Colab / CUDA enabled)

---

## 📊 Evaluation & Performance

### Metrics

- Accuracy

- Precision

- Recall

- F1-Score

  ### Highlights

- High disease classification accuracy

- Reduced false positives & false negatives

- Stable predictions across 3D volumes

---

## 🚀 Installation

### Clone repo

```bash
git clone <repo-url>
cd TransAugNet
```

### Create virtual environment

```bash
python -m venv .venv
source .venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

---


## ▶ Usage Examples


### Disease Prediction

```bash
python predict.py --input path/to/medical_volume
```

---

##🔬 Research Contributions


- Transformer-Aware Cyclic Augmentation

- Robust 3D medical image learning

- Reduced overfitting with ILR

- Faster diagnosis with high accuracy

- Real-time clinical decision support potential

---

## 📈 Applications

- Automated disease diagnosis

- Early-stage disease detection

- Clinical decision support systems

- Biomedical image analysis

- AI-assisted healthcare

---

## 🔮 Future Work


- Larger multi-organ datasets

- Advanced transformer architectures

- Explainable AI for medical interpretation

- Web & mobile deployment

- Hospital system integration

---

## 👥 Team

### 22471A05B2 — Nimmala Ashok

System architecture, model design, training & integration

### 22471A0582 — Chenna Reddy Sudheer Reddy

Dataset preprocessing, augmentation, evaluation

### 22471A05D9 — Yamarthy Venkata Krishna

Testing, performance analysis, deployment support

---

##🎓 Guide

Dr. S. N. Tirumala Rao, M.Tech., Ph.D
Professor & HoD, CSE

---

## 📧 Contact

ashoknimmala478@gmail.com

---


## 📜 License
Academic & Research Use Only



 


