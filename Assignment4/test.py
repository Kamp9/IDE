import numpy as np 
import matplotlib.pyplot as plt

test = np.genfromtxt("hands_pca.csv",delimiter=",")

print len(test)
x = []
y = []
for l in test:
	x.append(l[0])
	y.append(l[1])

plt.scatter(x,y)
plt.show()
test2 =  np.genfromtxt("hands.csv",delimiter=",")
#plt.plot(test2[0][0:56],test2[0][56:])
#plt.show()