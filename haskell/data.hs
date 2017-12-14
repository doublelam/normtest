data Int8 = 
data Color =  Color Int Int Int Float deriving (Show)

setGray :: Color -> Color
setGray (Color a b c d) =  Color 2 2 2 d