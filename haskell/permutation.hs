
permutations :: String -> [String]
permutations (x:xs) = 
  let strList = insertStrToStr (x:xs) 0
  in deduplication strList
  
numTolist :: Char -> String -> Int -> [String]
numTolist x [] _ = [[x]]
numTolist x (y:ys) n 
  | n >= length (y:ys) = [take n (y:ys) ++ [x] ++ drop n (y:ys)]
  | otherwise = getWhole
  where numList = take n (y:ys) ++ [x] ++ drop n (y:ys)
        getWhole = [numList] ++ [reverse numList] ++ numTolist x (y:ys) (n + 1)

insertStrToStr :: String -> Int -> [String]
insertStrToStr [] _ = []
insertStrToStr s n 
  | n >= length s - 1 = numTolist (s!!n) (kickOut s n) 0
  | otherwise = numList ++ insertStrToStr s (n + 1)
  where  numList = numTolist (s!!n) (kickOut s n) 0

kickOut :: String -> Int -> String
kickOut s n = take n s ++ drop (n + 1) s

-- deduplication :: [a] -> [a]
deduplication [] = []
deduplication (x:xs) = x : deduplication (filter (/= x) xs)

