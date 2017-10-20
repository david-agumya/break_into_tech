import csv, os

# Instructions: This is an advanced problem.
# How would you calculate and print out the average price of all the stocks?

# write stocks data as comma-separated values
def write():
    ''' Write stock data to csv file '''
    writer = csv.writer(open('stocks.csv', 'w', newline=''))
    writer.writerows([
        ('GOOG', 'Google, Inc.', 505.24, 0.47, 0.09),
        ('YHOO', 'Yahoo! Inc.', 27.38, 0.33, 1.22),
        ('CNET', 'CNET Networks, Inc.', 8.62, -0.13, -1.49),
        ('MSFT', 'Microsoft, Inc.', 28.62, -0.13, -1.49)
    ])


def cmp(a, b):
    ''' Compare two elements are return an integer describing the comparison '''
    return (a > b) - (a < b) 



# read stocks data, print status messages
def read():
    ''' Read from the csv file and perform simple analysis '''
    stocks = csv.reader(open('stocks.csv', 'r'))
    status_labels = {-1: 'down', 0: 'unchanged', 1: 'up'}
    print("-" * 80)
    for ticker, name, price, change, pct in stocks:
        status = status_labels[cmp(float(change), 0.0)]
        print ('%s is %s (%s%%)' % (name, status, pct))
    print("-" * 80)

# Run program
if os.stat('stocks.csv').st_size == 0:
    write()
    read()
else:
    read()