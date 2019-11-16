#!/usr/bin/env python
# coding: utf-8

# In[42]:


import random


class Deck():
    cardRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King"]
    cardType = ['Spade', 'Diamond', 'Hearts', 'Club']
    shuffleList = []       

    
    def Shuffle(self):
        for x in self.cardRanks:
            for y in self.cardType:
                self.shuffleList.append(x+" of " + y)
        random.shuffle(self.shuffleList)
        
        print("\nPrinting the whole shuffled Deck: ")
        for card in self.shuffleList:
            print(card)
            
        print("\n\nPrinting the length of Deck : ", len(self.shuffleList))
    
        print("\n\nRandamly selecting one card from shuffled deck ")
        print(self.shuffleList[random.randint(0, len(self.shuffleList)-1)])
        

Deck().Shuffle()






# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




