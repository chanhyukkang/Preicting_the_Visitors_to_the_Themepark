# project-jipgyo1
- 집중교육1 프로젝트를 위한 repository

## 주제
이 날 어때? : 놀이공원 일일 입장객 수 예측 서비스

## 문제점
- 놀이공원에 가고자 하는 날짜에 사람들이 몰릴지 안 몰릴지 도저히 알 수가 없다.

## 해결책
- 미래의 특정 날짜에 어느 정도의 사람이 올 지 예측한다.
- 놀이공원의 일별 입장객 수, 날씨, 대기오염 등의 데이터 셋을 머신러닝을 통해 적용한다.

## 타겟
- 20~30대 (또래 + 어린이 자녀를 둔 가정)
- 소중한 여름휴가 기간에 놀이공원에서
티 익스프레스를 10번 타고 싶은 사람
- 눈치게임에서 승리하고 싶은 사람들
- 공황장애가 있지만 
놀이기구를 타고 싶은 사람

## 모델링
- Multi-input model and mixed data
![11](https://user-images.githubusercontent.com/48430005/87755340-cadafc80-c841-11ea-8359-0d55f4679eb0.png)
- 시계열 핵심 feature 추출
- DNN + LSTM + regression
![22](https://user-images.githubusercontent.com/48430005/87755344-cc0c2980-c841-11ea-98d4-c7cf26b6bc4a.png)
![33](https://user-images.githubusercontent.com/48430005/87755348-cca4c000-c841-11ea-96d0-b6a788ce8c2b.png)

## 모델 학습 결과
![44](https://user-images.githubusercontent.com/48430005/87755351-cdd5ed00-c841-11ea-9be7-65f7ec60b1ee.png)
실제값과 예측값의 오차는 생각보다 크지만 경향성은 잘 예측
training set과 test set의 평균 입장객 수 차이는 9500명, 6100명으로 
설계한 모델의 오차가 더 낮은 것을 확인함

## 구현
![55](https://user-images.githubusercontent.com/48430005/87755365-d3333780-c841-11ea-85ed-160864971674.png)
![66](https://user-images.githubusercontent.com/48430005/87755368-d4646480-c841-11ea-99fa-0ed969ef771b.png)
