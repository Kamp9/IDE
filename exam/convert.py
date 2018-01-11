import numpy as np
from numpy import genfromtxt

np.set_printoptions(threshold=np.nan)

my_data = genfromtxt('phl_hec_all_kepler.csv', delimiter=',', dtype=object)

print my_data[1:, [0, 3, 5, 9, 11, 13, 22, 30, 36, 63, 67]]
print len(my_data[1:][0])
