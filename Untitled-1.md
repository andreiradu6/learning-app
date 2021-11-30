
{
index   0   1   2   3   4   5   6   7   8   9   10
id:1    9   9   9   0   0   1   0   1   1   1   10
id:2    10  10  10  1   1   C2  0   1   0   1   10 => scor: 5 + 4 + 1 = 10 puncte - potential candidat ideal.

}

0 - medie bac
1 - nota info
2 - nota mate
3 - voluntariat
4 - olimpiada
5 - engleza nivel (b1,b2,C+,cambridge,etc)
6 - franceza (incepator,mediu,conversational,fluent)
7 - germana (incepator,mediu,conversational,fluent)
8 - internship
9 - daca e dispus sa plece intr-un program erasmus
10 - nota purtare

CRTIERII IMPORTANTE: C0 , C5, C10


Daca media la bac >= 9 , il puteti considera un potential student erasmus --C0
Daca e dispus sa plece intr-un program erasmus , il puteti considera un potential student --C9
Daca la engleza alege b1/b2, il puteti considera un potential student --C5


CRITERII DE ACORDARE A PUNCTELOR

Pentru C0: Daca are media == 9 => ii acordam 1 PUNCT
           Daca are media intre 9 si 9.50 ii acordam 2 PUNCTELOR
           Daca are media intre 9.50 si 9.80 ii acordam 3 PUNCTE
           Daca are media intre 9.80 si 9.99 ii acordam 4 PUNCTE
           Daca are media == 10 ii acordam 5 PUNCTE.

Pentru C5: Daca are engleza B1 ii acordam 1 PUNCT
           Daca are engleza B2 ii acordam 2 PUNCTE
           Daca are C+ ii acordam 4 PUNCTE.

Pentru C10: Daca are nota la purtare mai mica decat 9, nu ii acordam niciun punct. 9+ = 1 PCT







TEHNIC: 
Daca aveti 11 criterii, o sa aveti nevoie de o matrice cu 11 coloane.
Numarul de linii este variabil, depinde de cate inregistrari vreti sa introduceti (ca sa nu le introduceti din consola, le puteti citi din fisier si faceti un exemplu cum am facut eu mai sus)
Dupa ce ati citit datele, incepeti sa calculati pentru fiecare candidat scorul (parcurgeti linie cu linie si pentru fiecare index, la final ii faceti scorul)
Va puteti salva scorurile candidatilor intr-un vector / matrice, adica daca in matrice candidatul are index 5, in vector o sa aiba tot index 5.
Pe baza scorurilor calculate, va puteti face un TOP10 al potentialilor candidati pentru programul erasmus (eventual il afisati intr-un fisier separat).
