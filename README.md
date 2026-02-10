
# 🩺 TransAugNet: Transformer-Aware Cyclic Augmentation for Biomedical Image Analysis

A deep learning–based framework for automated disease classification from high-resolution 3D medical images using Transformer-Aware Cyclic Augmentation with a ResNet3D-50 backbone.

---
## 👥 Team Information
### Nimmala Ashok
- **LinkedIn**: https://www.linkedin.com/in/ashok-nimmala-542116282/
- **Role & Contribution:** Project lead and primary contributor. Responsible for overall system design, implementation of the TransAugNet framework, ResNet3D-50 model training, experimentation with augmentation strategies, and performance evaluation on biomedical datasets

### Chenna Reddy Sudheer Reddy 
- **LinkedIn**: https://www.linkedin.com/in/sudheer-reddy-chenna-reddy-768b44279/
- **Role & Contribution:** Worked on dataset preparation, preprocessing of 3D medical images, and assistance in model training.


### Yamarthy Venkata Krishna
- **LinkedIn**: https://www.linkedin.com/in/yamarthy-venakta-krishna-b9b28328b/
- **Role & Contribution:** Contributed to exploratory data analysis, visualization of results, and documentation. Assisted in literature survey and preparation of project reports and presentations.



---

## 📌 Abstract
Accurate identification of diseases from medical images is critical for early diagnosis and effective treatment. Manual interpretation of high-resolution 3D medical images is time-consuming and prone to variability among clinicians.This project proposes TransAugNet, a deep learning framework based on a ResNet3D-50 architecture for automated disease classification from volumetric medical images. The model converts 3D image volumes into stacked 2D slices, enabling efficient feature extraction and improved disease classification accuracy. Experimental results demonstrate faster response time and reliable performance compared to traditional medical image analysis approaches.

---

## Paper Reference (Inspiration)
👉 **[Paper Title CyclicAugment: Optimized Medical Image Analysis via Adaptive Augmentation Intensity
  – Author Names xxxxxxxxxx
 ](https://ieeexplore.ieee.org/document/11005973)**
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
### ⏱️ Faster Diagnosis Time
Existing manual diagnosis ki ~600 seconds padutundi.
Mana TransAugNet model tho 5 seconds lo disease identification possible.

### 🧠 Transformer-Aware Cyclic Augmentation
Previous systems lo static augmentation matrame undedi.
Mana system lo cyclic + attention-based augmentation, which improves learning stability and accuracy.

### 🧩 Better 3D Volumetric Understanding
Existing models mostly 2D images tho work chestayi.
Mana model ResNet3D-50 use chesi 3D medical volumes ni 2D slices ga process chesi, spatial relationships ni correct ga nerchukuntundi.

### 📈 Improved Classification Accuracy
Attention mechanisms + cyclic augmentation valla
precision, recall, F1-score significant ga improve ayyayi compared to older methods.

### 🧪 Robust Feature Extraction
ResNet3D-50 deep residual architecture valla
subtle disease patterns (Adrenal & Vessel diseases) early stage lo kuda detect cheyyagalugutundi.

---

## 🧩 About the Project
This project presents TransAugNet, a deep learning–based biomedical image analysis system designed for accurate and fast disease detection using 3D medical images.
The model combines ResNet3D-50 with Transformer-Aware Cyclic Augmentation to improve diagnostic accuracy and reduce response time significantly.


### 🎯 Applications

🏥 Clinical decision support
🧠 Automated disease diagnosis
⏱️ Early-stage disease detection
📊 Medical image classification
🌍 AI-assisted healthcare systems

### 🔁 Workflow

Input 3D Medical Image (CT/MRI)
Preprocessing (3D → 2D slices)
Cyclic Augmentation + ILR
ResNet3D-50 (Feature Extraction)
Classification (Healthy / Diseased)
 Output Prediction
 
---


## Dataset Used
👉 **3D Bio - medical images (Zenodo)**  
https://zenodo.org/records/10519652

**Dataset Details:**

📦 Total images: 3,492 (3D volumes)
📊 AdrenalMNIST3D: 1,584 samples
📊 VesselMNIST3D: 1,908 samples
🧬 High-resolution volumetric medical images
⚖️ Balanced and suitable for 3D disease classification

---

## Dependencies Used

🐍 Python
🔥 PyTorch / MONAI
🧠 ResNet3D-50
📊 NumPy, Pandas
📈 Matplotlib
🖥️ Google Colab (GPU)
🌐 Flask (Deployment)

---

## EDA & Preprocessing

🖤 Conversion to grayscale
📐 Resizing to 224×224
📉 Normalization (ImageNet stats)
🔄 Cyclic Augmentation
🎚️ Intensity Level Regulation (ILR)
🔁 Random rotation & flipping
🌫️ Gaussian smoothing & contrast adjustment

---

## 🧪 Model Training Info 

ResNet3D-50 generates deep 3D volumetric feature embeddings
Transformer-Aware Cyclic Augmentation improves feature learning
Intensity Level Regulation (ILR) stabilizes training
Cross-Entropy Loss for binary classification
Adam Optimizer for faster convergence
Batch Size: 16
Training Epochs: 10
Output Classes: Healthy / Diseased

---

## Model Testing / Evaluation

**📊 Metrics Used**
Accuracy
Precision
Recall
F1-Score
Confusion Matrix

**🔍 Compared With**

Manual diagnosis (human experts)
2D CNN-based models
Static augmentation techniques

---

## Results

# 🩺 Classification Performance

**📊 Overall Accuracy**
✔️ High classification accuracy achieved over 87% for both AdrenalMNIST3D and VesselMNIST3D datasets
✔️ Significant improvement over traditional and 2D CNN-based approaches

 **Diagnosis Time**
 
Human expert: ~600 seconds

TransAugNet: ~5 seconds

---

## Limitations & Future Work

📦 Larger multi-organ datasets
🧠 Advanced transformer integration
🌐 Real-time hospital deployment
📱 Web & mobile-based diagnosis systems
🔍 Explainable AI for doctors

---

## Deployment Info

Python backend
Trained ResNet3D-50 model
GPU-accelerated inference
Flask-based web application
Batch prediction support

---

## ✨ Project By

👨‍💻 Nimmala Ashok
👨‍💻 Chenna Reddy Sudheer Reddy
👨‍💻 Yamarthy Venkata Krishna

🎓 TransAugNet: Transformer-Aware Cyclic Augmentation for Biomedical Image Analysis
