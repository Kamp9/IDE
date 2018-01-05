from numpy import genfromtxt

my_data = genfromtxt('phl_hec_all_kepler.csv', delimiter=',', dtype=object)

print my_data[1][0]
