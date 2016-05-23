from visual import *
from physutil import *

[col1, col2, col3] = readcsv('dataIN.csv', cols = 3) 

print(col1)
print(col2)
print(col3)

writecsv('dataOUT.csv', [col1,col2,col3], header=['one','two','three'])
