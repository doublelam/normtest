import Data.List
findMissingLetter :: String -> Char
findMissingLetter cs = head ([(head cs)..(cs!!(length cs - 1))] \\ cs)
