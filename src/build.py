s=open('src/app.html').read()
parts={'/*BRAND*/':'brand.js','/*TOPIC1*/':'topic1.js','/*TOPIC2*/':'topic2.js','/*TOPIC3*/':'topic3.js'}
for k,f in parts.items():
    assert k in s, k
    s=s.replace(k,open('src/'+f).read())
open('index.html','w').write(s)
