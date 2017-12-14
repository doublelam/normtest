_xo :: String -> Integer -> Integer -> (Integer, Integer)
_xo [] xn on = (xn, on)
_xo [x] xn on 
  | x == 'x' || x == 'X' = (xn + 1, on)
  | x == 'o' || x == 'O' = (xn, on + 1)
  |otherwise = (xn, on)
_xo (x:xs) xn on = 
  let fstV = _xo [x] xn on
  in _xo xs (fst fstV) (snd fstV) 

xo :: String -> Bool
xo s = 
  let val = _xo s 0 0 
  in fst val == snd val
