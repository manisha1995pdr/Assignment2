1. Follow the instalation instrcutions given in the document 
2. install chrome extension app post man

3. To Add Company
do a POST request on localhost:3000/api/company/
company db schema has one field
name = string

4. To Add College
do a POST request on localhost:3000/api/college/
company db schema has one field
name = string
company = relation with company schema. this takes id of the company schema

5. To Add Student
do a POST request on localhost:3000/api/student/
company db schema has one field
name = string
department = string
rollno = number
cgpa = number
company = relation with company schema. this takes id of the company schema
college = relation with college schema. this takes id of the college schema

6. to get all student
localhost:3000/api/student/

7. to get all company
localhost:3000/api/company/

8. to get all college
localhost:3000/api/college/

7. to get delete student
localhost:3000/api/student/{add_id_here} 

8. to get delete company
localhost:3000/api/company/{add_id_here} 

9. to get delete college
localhost:3000/api/college/{add_id_here} 



NOTE:
You need to create a testdb as well.. 
Name of the db should be "testdb".
Now go to testapp folder on CMD and then type node server.js
if it says 
connected via port 3000
it means server has started.. now you can post a request on postman...