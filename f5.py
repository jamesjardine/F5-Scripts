#!/usr/bin/env python

# This script decodes the IP and Port of an F5 cookie.
# example string: 839518730.47873.0000
# This script is extended off of the concept from http://penturalabs.wordpress.com/2011/03/29/how-to-decode-big-ip-f5-persistence-cookie-values/ where I have added in the ability to decode the Port as well.

import struct
import sys

if len(sys.argv) != 2:
        print( "Usage: %s encoded_string" % sys.argv[0])
        exit(1)

cookie_value = sys.argv[1]
print(cookie_value)
(host, port, end) = cookie_value.split('.')

#(a, b, c, d) = [ord(i) for i in struct.pack("<I", int(host))]
(a, b, c, d) = [i for i in struct.pack("<I", int(host))]
#p = [ord(i) for i in struct.pack("<I", int(port))]
p = [i for i in struct.pack("<I", int(port))]
portOut = p[0]*256 + p[1]


print( "%s.%s.%s.%s:%s\n" % (a,b,c,d,portOut))


