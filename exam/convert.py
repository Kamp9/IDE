import numpy as np
from numpy import genfromtxt

np.set_printoptions(threshold=np.nan)

my_data = genfromtxt('phl_hec_all_kepler.csv', delimiter=',', dtype=object)
my_data2 = genfromtxt('phl_hec_all_confirmed.csv', delimiter=',', dtype=object)
my_names = genfromtxt('exonames.txt', delimiter=',', dtype=str)

extract = [0, 1, 3, 5, 9, 11, 13, 22, 27, 30, 36, 63, 67]

dataTosave = my_data[:, extract]
dataTosave2 = my_data2[:, extract]

allp = []
habit = []

for i in dataTosave:
    temp = [number for number in i if number]
    if temp[0] in my_names:
        habit += [[temp[0]] + ["empty"] + temp[1:]]
    elif temp[1] in my_names:
        habit += [temp]
    if len(temp) == len(extract):
        allp += [temp]

allp2 = []
for i in dataTosave2:
    temp = [number for number in i if number]
    if len(temp) == len(extract):
        allp2 += [temp]


np.savetxt("habit_planets.csv", [allp[0]] + habit, fmt='%s', delimiter=",")
np.savetxt("planets.csv", allp, fmt='%s', delimiter=",")
np.savetxt("planets2.csv", allp2, fmt='%s', delimiter=",")
