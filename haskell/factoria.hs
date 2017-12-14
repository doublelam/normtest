
factoria :: Integer -> Integer
factoria = _factoria 1
  where _factoria :: Integer -> Integer -> Integer
        _factoria mul n
          | n <= 1 = mul
          | otherwise = _factoria (mul * n) (n - 1)


sumFact :: Integer -> Integer
sumFact = _sumFact 0
  where _sumFact :: Integer -> Integer -> Integer
        _sumFact sum n
          | n <= 0 = sum
          | otherwise = _sumFact (sum + factoria n) (n - 1)

sumFacto :: Integer -> Integer
sumFacto  = _sumFacto 0 1 1 
  where _sumFacto :: Integer -> Integer -> Integer -> Integer-> Integer
        _sumFacto sum temp a n
          | a == n = sum + temp
          | otherwise = _sumFacto (sum + temp) (temp * (a + 1)) (a + 1) n

truncate' :: Double -> Integer -> Double
truncate' n i = fromIntegral (floor (n * fromIntegral t)) / fromIntegral t
  where t = 10 ^ i
  
going :: Integer -> Double
going n = truncate' (fromRational (toRational (sumFacto n) / toRational (factoria n))) 6



