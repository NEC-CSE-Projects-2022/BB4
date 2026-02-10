import numpy as np
import plotly.graph_objects as go
import ipywidgets as widgets
from IPython.display import display

# ----------------------------------
# LOAD NPZ FILE
# ----------------------------------
# Change file name as needed
data = np.load("healthy_case.npz")     # or diseased_case.npz

# If demo file
volume = data["volume"]                # (64,64,64)

# If full dataset file, use:
# volume = data["test_images"][0]

print("Volume shape:", volume.shape)
print("Dtype:", volume.dtype)

# ----------------------------------
# NORMALIZE FOR DISPLAY
# ----------------------------------
if volume.max() > 1:
    volume = volume / 255.0

depth = volume.shape[2]

# ----------------------------------
# INITIAL SLICE
# ----------------------------------
fig = go.FigureWidget(
    data=[go.Heatmap(
        z=volume[:, :, 0],
        colorscale="Gray",
        showscale=False
    )],
    layout=go.Layout(
        title="3D Medical Image Slices",
        width=500,
        height=500
    )
)

# ----------------------------------
# SLIDER CALLBACK
# ----------------------------------
def update_slice(change):
    slice_idx = change["new"]
    fig.data[0].z = volume[:, :, slice_idx]
    fig.layout.title = f"3D Medical Image Slices (Slice {slice_idx})"

slider = widgets.IntSlider(
    value=0,
    min=0,
    max=depth - 1,
    step=1,
    description="Slice:",
    continuous_update=True
)

slider.observe(update_slice, names="value")

# ----------------------------------
# PLAY / PAUSE CONTROLS
# ----------------------------------
play = widgets.Play(
    interval=150,   # speed (ms)
    value=0,
    min=0,
    max=depth - 1,
    step=1,
    description="Play",
    disabled=False
)

widgets.jslink((play, "value"), (slider, "value"))

controls = widgets.HBox([play, slider])

# ----------------------------------
# DISPLAY EVERYTHING
# ----------------------------------
display(fig, controls)
