import pandas as pd

file_path = "/workspaces/my_cv.github.io/ParcBrynBachResults - Results (All Time).csv"
df = pd.read_csv(file_path)
  
personal_bests = df.query("Best == 'PB'")
latest_pbs = personal_bests.head(25)
#print(latest_pbs)

season_bests = df.query("Best == 'SB'")
latest_sbs = season_bests.head(25)
#print(latest_sbs)

club_record = df.query("`Club Record` == 'Y' & Sex == 'W' & `Age Category` == 'SEN'")

#print(club_record)

# first way
sorted = club_record.sort_values(['Date'], ascending = [True])

first = sorted.groupby('Distance').first().reset_index()

print(first)