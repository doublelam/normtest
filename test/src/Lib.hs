module Lib
    ( someFunc
    ,maximum'
    ,bigger'
    ,forTest
    ) where

someFunc :: IO ()
someFunc = putStrLn "someFunc"

bigger' :: (Ord a) => a -> a -> a
bigger' x y
  |x > y = x
  |otherwise = y 

maximum' :: (Ord a) => [a] -> a
maximum' [] = error "element is empty"
maximum' [x] = x
maximum' [x,y] = bigger' x y
maximum' (x:xs) = bigger' x (maximum' xs)


forTest ::  (Integral a) => a -> String
forTest x
    | x > 0 = "positive"
    | x < 0 = "negative"
    |otherwise = "zero"
