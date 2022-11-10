import nltk 
from nltk.stem import PorterStemmer

pst=PorterStemmer()

print(pst.stem("computers"))
print(pst.stem("going"))

