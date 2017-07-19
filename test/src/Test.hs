module Test 
  (bigger'
  ,maximum'
  ) where

bigger' :: (Ord a) => a -> a -> a
bigger' x y
  |x > y = x
  |otherwise = y 

maximum' :: (Ord a) => [a] -> a
maximum' [] = error "element is empty"
maximum' [x] = x
maximum' [x,y] = bigger' x y
maximum' (x:xs) = bigger' x (maximum' xs)

smaller' :: (Ord a) => a -> a -> a
smaller' x y 
  |x < y = x
  |otherwise = y

minimum' :: (Ord a) => [a] -> a
minimum' [] = error "element is empty"
minimum' [x] = x
minimum' [x,y] = smaller' x y
minimum' (x:xs) = smaller' x (minimum' xs)


sort' :: (Ord a) => [a] -> [a]
sort' [] = []
sort' (x:xs) = 
  sort' (filter' (<x) xs) ++ [x] ++ sort' (filter' (>x) xs)


compare' :: (Ord a, Num a) => a -> a -> Ordering
compare' x y
  | x < y = GT
  | x > y = LT
  | x == y = EQ

compareWithHundred :: (Ord a, Num a) => a -> Ordering
compareWithHundred  = compare' 100 

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ _ [] = []
zipWith' _ [] _ = []
zipWith' f (x:xs) (y:ys) =  f x y : zipWith' f xs ys

filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' f (x:xs)
  | f x       = x : filter' f xs
  | otherwise = filter' f xs 



chain' :: (Integral a) => a -> [a]
chain' 1 = [1]
chain' x
  | even x = x : chain' (div x 2)
  | odd x = x : chain' (x * 3 + 1)

data Point = Evv Float Float deriving (Show)

test' :: Point -> Point
test' x = x

data Cute = Cutt String Int | Dtt [Int] Int

gg :: Cute -> Bool
gg (Cutt _ _) = True
gg (Dtt _ _) = False

main = putStrLn "ddddd"

