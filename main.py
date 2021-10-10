print("The objective of this game is to run the opponent out of moves \non a board.")
sizes = [str(i) for i in range(4,11)]
size = input("Board size (Between 4 and 10): ")
while size not in sizes:
  size = input("Invalid! Board size (Between 4 and 10): ")
size = int(size)
t_row = []
for i in range(size):
  t_row.append('')
rlist = [str(i) for i in range(size)]
key1 = {
  0 : '-',
  1 : 'A',
  2 : 'B',
  3 : 'X',
}
key2 = {
  0 : 'Up',
  1 : 'Right',
  2 : 'Down',
  3 : 'Left',
}
lb = '-' * (4*size + 1)
chosen = 0
turn = 1
game_over = False
win = 0
board = []
a_coord = [0,0]
b_coord = [size-1,size-1]
def print_grid():
  for row in board:
    print(lb)
    for i in range(size):
      t_row[i] = key1.get(row[i])
    print('| '+' | '.join(t_row)+' |')
  print(lb)
for i in range(size):
  board.append([])
  for j in range(size):
    board[i].append(0)
board[0][0] = 1
board[size-1][size-1] = 2
while game_over == False:
  print_grid()
  aval = []
  if turn == 1:
    turn = 2
    if a_coord[0] != 0 and board[a_coord[0]-1][a_coord[1]] == 0:
      aval.append(0)
    if a_coord[1] != size-1 and board[a_coord[0]][a_coord[1]+1] == 0:
      aval.append(1)
    if a_coord[0] != size-1 and board[a_coord[0]+1][a_coord[1]] == 0:
      aval.append(2)
    if a_coord[1] != 0 and board[a_coord[0]][a_coord[1]-1] == 0:
      aval.append(3)
    if aval == []:
      game_over = True
      win = 2
      print("Player A has run out of moves.")
      break
    print("Player A's turn. Avaliable moves: ")
    for move in aval:
      print(move, '(' + key2.get(move) + ')')
    chosen = input("Move chosen: ")
    while chosen.isdigit() == False or chosen not in [str(move) for move in aval]:
      print("Invalid! Options are " + ', '.join([str(move) for move in aval]))
      chosen = input("Move chosen: ")
    board[a_coord[0]][a_coord[1]] = 3
    chosen = int(chosen)
    if chosen == 0:
      a_coord[0] -= 1
    elif chosen == 1:
      a_coord[1] += 1
    elif chosen == 2:
      a_coord[0] += 1
    else:
      a_coord[1] -= 1
    board[a_coord[0]][a_coord[1]] = 1
  else:
    turn = 1
    if b_coord[0] != 0 and board[b_coord[0]-1][b_coord[1]] == 0:
      aval.append(0)
    if b_coord[1] != size-1 and board[b_coord[0]][b_coord[1]+1] == 0:
      aval.append(1)
    if b_coord[0] != size-1 and board[b_coord[0]+1][b_coord[1]] == 0:
      aval.append(2)
    if b_coord[1] != 0 and board[b_coord[0]][b_coord[1]-1] == 0:
      aval.append(3)
    if aval == []:
      game_over = True
      win = 1
      print("Player B has run out of moves.")
      break
    print("Player B's turn. Avaliable moves: ")
    for move in aval:
      print(move, '(' + key2.get(move) + ')')
    chosen = input("Move chosen: ")
    while chosen.isdigit() == False or chosen not in [str(move) for move in aval]:
      print("Invalid! Options are " + ', '.join([str(move) for move in aval]))
      chosen = input("Move chosen: ")
    board[b_coord[0]][b_coord[1]] = 3
    chosen = int(chosen)
    if chosen == 0:
      b_coord[0] -= 1
    elif chosen == 1:
      b_coord[1] += 1
    elif chosen == 2:
      b_coord[0] += 1
    else:
      b_coord[1] -= 1
    board[b_coord[0]][b_coord[1]] = 2
if win == 2:
  print("Player B wins!")
else:
  print("Player A wins!")