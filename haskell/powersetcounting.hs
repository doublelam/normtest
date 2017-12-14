powers :: Num a => [t] -> a
powers [] = 1
powers [x] = 2
powers (x:xs) = 2 * powers xs
