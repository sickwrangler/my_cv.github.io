import pandas as pd

#get CSV data and turn this into a dataframe
file_path = "/workspaces/my_cv.github.io/canlyniadaur/ParcBrynBach020723 - Results (All Time).csv"
df = pd.read_csv(file_path)

#Get the 25 recent PBs
personal_bests = df.query("Best == 'PB'")
latest_pbs = personal_bests.head(25)
columns_to_remove = ['Sex', 'Age Position','Gender Position', 'Best', 'Club Record' ]
latest_pbs = latest_pbs.drop(columns=columns_to_remove)

#Get the 25 recent SBs
season_bests = df.query("Best == 'SB'")
latest_sbs = season_bests.head(25)
columns_to_remove = ['Sex', 'Age Position','Gender Position', 'Best', 'Club Record' ]
latest_sbs = latest_sbs.drop(columns=columns_to_remove)

#Get current club records
#club_record = df.query("`Club Record` == 'Y' & Sex == 'W' & `Age Category` == 'SEN'")
#print(club_record)
# first way
#sorted = club_record.sort_values(['Date'], ascending = [True])
#first = sorted.groupby('Distance').first().reset_index()
#print(first)

pb_html_table = latest_pbs.to_html()
sb_html_table = latest_sbs.to_html()

text_file = open("/workspaces/my_cv.github.io/canlyniadaur/PBResultsTable.html", "w")
text_file.write(pb_html_table)
text_file.close()
text_file = open("/workspaces/my_cv.github.io/canlyniadaur/SBResultsTable.html", "w")
text_file.write(sb_html_table)
text_file.close()