print(1, "- addition ")
print(2, "- subtraction")
print(3, "- multiply")
print(4, "- devide")
print(5, "- clear")
print("Enter operation:    ")
while (True):
    g = int(input())
    h = int(input())
    i = int(input())
    if g in range(0,6):
        if (g == 1):
            print(h + i)
        elif (g == 2):
            print(h - i)
        elif (g == 3):
            print(h * i)
        elif (g == 4):
            if i == 0:
                print("Never devide on Zero !!!")
            else:
                print(h / i)
        elif (g == 5):
            print("End of the programm)))")
            break
    else:
        print("Command nbot found !!!")