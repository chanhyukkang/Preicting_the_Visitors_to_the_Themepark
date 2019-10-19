import numpy as np
import sys
from keras import layers, models
from keras.utils import np_utils
from keras import optimizers
from keras.optimizers import Adam
from keras.layers import LSTM, Dense, concatenate
from keras.models import Sequential, Model
from keras.callbacks import EarlyStopping, ModelCheckpoint
import keras.backend as K
import pandas as pd 
#from sklearn.preprocessing import MinMaxScaler
print(sys.argv)
print(len(sys.argv[1]))
print("abcdefgs")