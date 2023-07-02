import pandas as pd

#get CSV data and turn this into a dataframe
file_path = "/workspaces/my_cv.github.io/ParcBrynBachResults - Results (All Time).csv"
df = pd.read_csv(file_path)
  
#Get the 25 recent PBs
personal_bests = df.query("Best == 'PB'")
latest_pbs = personal_bests.head(25)
#print(latest_pbs)

#Get the 25 recent SBs
season_bests = df.query("Best == 'SB'")
latest_sbs = season_bests.head(25)
#print(latest_sbs)

#Get current club records
#club_record = df.query("`Club Record` == 'Y' & Sex == 'W' & `Age Category` == 'SEN'")
#print(club_record)
# first way
#sorted = club_record.sort_values(['Date'], ascending = [True])
#first = sorted.groupby('Distance').first().reset_index()
#print(first)

pb_html_table = latest_pbs.to_html()

print(pb_html_table)
