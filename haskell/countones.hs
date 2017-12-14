
countOnes :: Integer -> Integer -> Integer
countOnes left right = sum [getBinaryOne a | a <- [left..right]]

divideNum :: Integer -> Integer -> (Integer, Integer)
divideNum x y = (quotient, remainder)
  where quotient = quot x y
        remainder = mod x y


getBinaryOne :: Integer -> Integer
getBinaryOne n 
  | n <= 1 = n
  | otherwise = getBinaryOne (fst getQuoRem) + getBinaryOne (snd getQuoRem) 
  where getQuoRem = divideNum n 2