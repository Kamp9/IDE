import numpy as np
from numpy import genfromtxt

np.set_printoptions(threshold=np.nan)

my_data = genfromtxt('phl_hec_all_kepler.csv', delimiter=',', dtype=object)

extract = [0, 3, 5, 9, 11, 13, 22, 27, 30, 36, 63, 67]

dataTosave = my_data[:, extract]

ans = []
for i in dataTosave:
    temp = [number for number in i if number]
    if len(temp) == len(extract):
        ans += [temp]
# print ans

np.savetxt("planets.csv", np.array(ans),fmt='%s',delimiter=",")
