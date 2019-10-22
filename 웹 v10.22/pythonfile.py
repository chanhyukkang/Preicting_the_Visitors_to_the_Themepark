import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import datetime
from dateutil.parser import parse
import sys

print(sys.argv)
inputdate = sys.argv[1] 
#***************************파일을 읽고, 날짜 column생성*********************************
df = pd.read_csv('SeoulGrandParkFinal.csv', engine = 'python', dtype = 'str')    
df["날짜"] = df["년도"].map(str) + '-' +df["월"].map(str) + '-' + df["일"].map(str)
df = df.set_index('날짜')

split_date_last = '2019-05-15'
train = df.loc[:split_date_last]

trainLSTM = df.loc[:split_date_last, ['일계']]
#**************************데이터를 사용가능하도록 변환**********************************
train['일계'] = train['일계'].str.replace(',', '')
train['일계'] = train['일계'].astype('float')

trainLSTM['일계'] = trainLSTM['일계'].str.replace(',', '')
trainLSTM['일계'] = trainLSTM['일계'].astype('float')
weekfrom = 2
weekto = 33
week = weekto - weekfrom

pa = parse(inputdate)
pa = pa - datetime.timedelta(weekfrom*7)
tmp3 = [0] * week
for i in range(week):
    j = i*7
    patmp = pa - datetime.timedelta(j)
    patmp2 = pa - datetime.timedelta(j+6)
    tmp = trainLSTM.loc[patmp2.strftime("%Y-%m-%d"):patmp.strftime("%Y-%m-%d")]
    tmp2 = tmp['일계'].mean()
    tmp3[i] = tmp2
    tmp4 = np.array(tmp3)
weekinput = tmp4.reshape(week, 1)

sc2 = MinMaxScaler()
sc2.fit([[225.85714286],[41689.14285714]])
weekinput = sc2.transform(weekinput)
# print(weekinput)

dayfrom = 14
dayto = 42
day = dayto - dayfrom

pa = parse(inputdate)
pa = pa - datetime.timedelta(dayfrom)
tmp3 = [0] * day
for i in range(day):
    patmp = pa - datetime.timedelta(i)
    tmp = trainLSTM.loc[patmp.strftime("%Y-%m-%d")]
    tmp3[i] = tmp
    tmp4 = np.array(tmp3)
dayinput = tmp4.reshape(day, 1)
sc = MinMaxScaler()
sc.fit([[2],[115002]])
dayinput = sc.transform(dayinput)
# print(dayinput)

train_df = pd.DataFrame(train)
X_train = train_df.drop(['일계', '년도', '일'], axis=1)
X_train = pd.get_dummies(X_train, columns=['요일', '월'])

# print(X_train.loc[inputdate])

sc3 = MinMaxScaler()
sc3.fit([[0, -14.4, -18, -10.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[1, 31.8, 28.7, 36.7, 24, 301.5, 1224, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]])
featureinput = sc3.transform([X_train.loc[inputdate]])
# print(featureinput)
from keras.models import load_model
model4 = load_model('visitorpredict.h5')

# print("Model loaded")
Y_pred = model4.predict([[dayinput], featureinput, [weekinput]])
ypred = sc.inverse_transform(Y_pred)
print("4")
print(int(ypred[0][0]))