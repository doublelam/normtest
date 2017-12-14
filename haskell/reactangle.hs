squaresInRect :: Integer -> Integer -> Maybe [Integer]
squaresInRect lng wdth 
  | lng == wdth = Nothing
  | otherwise = Just (squaresInRect' lng wdth) 
  
  
squaresInRect' :: Integer -> Integer -> [Integer]
squaresInRect' lng wdth
  | lng == wdth = [lng]
  | otherwise = lesserN : squaresInRect' lesserN subtractN  
  where sortNum = lesserAndGreater lng wdth 
        lesserN = fst sortNum
        subtractN = snd sortNum - fst sortNum

  
lesserAndGreater :: (Ord a) => a -> a -> (a, a)
lesserAndGreater x y
  | x > y = (y, x)
  |otherwise = (x, y)