def calculator() -> None:
    sums = 0
    for i in range(31):
        if i % 3 == 0:
            sums += i
    print(sums)


print(calculator())
