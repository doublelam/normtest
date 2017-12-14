-- inArray :: [String] -> [String] -> [String]
-- inArray a1 a2 = 
-- import Data.List

getIfSub ::  String -> [String] -> [String]
getIfSub str (x:xs)
  | ifHasSub = [str]
  | otherwise = []
  where ifHasSub = length (takeWhile (not . ifSubList str ) (x:xs)) /= length (x:xs)  

inArray :: [String] -> [String] -> [String]
inArray [] _ = []
inArray _ [] = []
inArray [x] (y:ys) = getIfSub x (y:ys)
inArray (x:xs) (y:ys) = sort' (<) (deduplication (getIfSub x (y:ys) ++ inArray xs (y:ys)))

ifSubList :: String -> String -> Bool 
ifSubList "" _ = true
ifSubList _ "" = false
ifSubList (x:xs) (y:ys) =
  let strLen = length (x:xs)
  in  (x:xs) `elem` getSubLi (y:ys) strLen 0


getSubLi :: String -> Int -> Int -> [String]
getSubLi [] _ _ = [""]
getSubLi (x:xs) n index
  | length (x:xs) < n = [x:xs]
  | (index + n) == length (x:xs) = [droped]
  | otherwise =  droped : getSubLi (x:xs) n (index + 1)
  where droped = drop index (take (n + index) (x:xs))

deduplication :: (Eq a) => [a] -> [a]
deduplication [] = []
deduplication [x] = [x]
deduplication (x:xs) = x : deduplication (filter (/=x) xs)

sort' :: (Eq a) => (a -> a -> Bool) -> [a] -> [a]
sort' _ [] = []
sort' _ [x] = [x]
sort' f (x:xs) = sort' f (filter (`f` x) xs) ++ [x] ++ sort' f (filter (\v -> not (f v x)) xs)

ifNdAscSort :: [String] -> [String]
ifNdAscSort [] = []
ifNdAscSort (x:xs)
  | length x == 1 = sort' (<) (x:xs)
  | otherwise = x:xs
