accrual :: Integer -> Integer
accrual = _accrual 0 1
  where _accrual :: Integer -> Integer ->Integer -> Integer
        _accrual sum a n
          | n == 0 = 0
          | a == n = sum + a
          | otherwise = _accrual (sum + a) (a + 1) n

ifAcc :: Integer -> Bool
ifAcc = _ifAcc 0 1
  where _ifAcc :: Integer -> Integer -> Integer -> Bool
        _ifAcc sum a n
          | sum == n = True
          | sum > n = False
          | otherwise = _ifAcc (sum + a) (a + 1) n