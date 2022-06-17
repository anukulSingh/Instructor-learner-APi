<div class="container-fluid">

<<<<<<< HEAD
# DevCourses API



## Indices

* [Authentication](#authentication)

  * [Get logged in user profile](#1-get-logged-in-user-profile)
  * [Logout user](#2-logout-user)
  * [Register user](#3-register-user)
  * [Reset password](#4-reset-password)
  * [Update password](#5-update-password)
  * [Update user details](#6-update-user-details)
  * [forgotpassword](#7-forgotpassword)
  * [login user](#8-login-user)

* [Bootcamps](#bootcamps)

  * [Create a bootcamp](#1-create-a-bootcamp)
  * [Delete a bootcamp](#2-delete-a-bootcamp)
  * [Fetch a single bootcamp](#3-fetch-a-single-bootcamp)
  * [Fetch all bootcamps](#4-fetch-all-bootcamps)
  * [Get Bootcamps by distance](#5-get-bootcamps-by-distance)
  * [Update a bootcamp](#6-update-a-bootcamp)

* [Courses](#courses)

  * [Create bootcamp course](#1-create-bootcamp-course)
  * [Delete a course](#2-delete-a-course)
  * [Fetch all courses](#3-fetch-all-courses)
  * [Get a single course](#4-get-a-single-course)
  * [Get courses of bootcamp](#5-get-courses-of-bootcamp)
  * [Update a course](#6-update-a-course)

* [Reviews](#reviews)

  * [Add review for bootcamp](#1-add-review-for-bootcamp)
  * [Add review for bootcamp](#2-add-review-for-bootcamp)
  * [Delete review](#3-delete-review)
  * [Get a single review](#4-get-a-single-review)
  * [Get all reviews](#5-get-all-reviews)
  * [Get reviews for a bootcamp](#6-get-reviews-for-a-bootcamp)
  * [Update review](#7-update-review)

* [User](#user)

  * [Create a user](#1-create-a-user)
  * [Delete a user](#2-delete-a-user)
  * [Get a single users](#3-get-a-single-users)
  * [Get users](#4-get-users)
  * [Update a single user](#5-update-a-single-user)


--------


## Authentication
Route for user register, logging, reset passowrd etc



### 1. Get logged in user profile


get logged in user via token


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "name": "test",
    "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
    "website": "https://moderntech.com",
    "phone": "(222) 222-2222",
    "email": "enroll@moderntech.com",
    "address": "220 Pawtucket St, Lowell, MA 01854",
    "careers": ["Web Development", "UI/UX", "Android Development"],
    "housing": false,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}
```



### 2. Logout user


Clears token cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



### 3. Register user


Add a user to database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "name": "Natasha hailey",
    "email": "nat@gmail.com",
    "password": "123456",
    "role": "user"
}
```



### 4. Reset password


Reset password using a random token via email


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/6d8614f2b6e603a06f7141211eb875e518c3821f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "password": "12345678"
}
```



### 5. Update password


Update logged in user password, passing currentPassword and newPassword in the body


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "currentPassword": "123456",
    "newPassword": "1234567"
}
```



### 6. Update user details


updates name and email of a user


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "email": "john@gmail.com",
    "name": "John Doe"
}
```



### 7. forgotpassword


send token for forgetpassword


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "email": "kevin@gmail.com"
}
```



### 8. login user


login user and sends back a token


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "email": "publisher@gmail.com",
    "password": "123456"
}
```



## Bootcamps



### 1. Create a bootcamp


Add new bootcamp to database, must be publisher or admin


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "name":"ModernTech Bootcamp",
    "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
    "website": "https://moderntech.com",
    "phone": "(222) 222-2222",
    "email": "enroll@moderntech.com",
    "address": "220 Pawtucket St, Lowell, MA 01854",
    "careers": ["Web Development", "UI/UX", "Android Development"],
    "housing": false,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}
```



### 2. Delete a bootcamp


Delete a bootcamp from database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/60d32aed202924274054e4bd
```



### 3. Fetch a single bootcamp


Fetch a single bootcamp with ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/60811f14cdea3c17814e2661
```



### 4. Fetch all bootcamps


Fetch all bootcamps with sorting,pagination and filtering


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```



### 5. Get Bootcamps by distance



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/radius/02118/30
```



### 6. Update a bootcamp


Update a single bootcamp in database


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/bootcamps/608125b274703a19cdeaaae2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "housing": true
}
```



## Courses



### 1. Create bootcamp course


Create a course for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/60cc446a8dfb5b11c1191d0d/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "title": "Test course 2",
    "description": "This is a dummy course",
    "weeks": 6,
    "tuition": 20000,
    "minimumSkill": "intermediate",
    "scholarshipsAvailable": false
}
```



### 2. Delete a course


Delete a course by id


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/60c73c98ca3b821e27fe5d55
```



### 3. Fetch all courses


Get all courses or of a bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| tuition[lt] | 10000 |  |



### 4. Get a single course


Get a single course by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



### 5. Get courses of bootcamp


get all courses of a particular bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d713995b721c3bb38c1f5d0/courses
```



### 6. Update a course


Update a course by id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/60cc44ed8dfb5b11c1191d0e
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "weeks": 16,
    "minimumSkill": "advanced"
}
```



## Reviews
manage bootcamp reviews



### 1. Add review for bootcamp


post reviews for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/60d2e58504c33d3131f7f67b/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "title": "cool bootcamp",
    "text": "dsjfsd dsfsdjfsd sdfjdsifejif",
    "rating": 10
}
```



### 2. Add review for bootcamp


Submit review for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/60d2e58504c33d3131f7f67b/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "title": "cool bootcamp",
    "text": "dsjfsd dsfsdjfsd sdfjdsifejif",
    "rating": 10
}
```



### 3. Delete review


Rempve review from database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/60d2e71204c33d3131f7f67e
```



### 4. Get a single review


Get a review with id from database and populate it with corresponding bootcamp details


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be021
```



### 5. Get all reviews


Get all reviews from database and populate it with corresponding bootcamp details


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews
```



### 6. Get reviews for a bootcamp


Fetch the reviews for a specific bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/reviews
```



### 7. Update review


update review in database


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/reviews/60d2e71204c33d3131f7f67e
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "title": "Fucking sheeet"
}
```



## User
CRUD functionality for users, available only for the admin



### 1. Create a user


create a user (admin)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "name": "William",
    "email": "william@hotmail.com",
    "password": "123456"
}
```



### 2. Delete a user


delete a user by id (Admin)


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/60d17a2e5e0aa912c7f02485
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "name": "William",
    "email": "william@hotmail.com",
    "password": "123456"
}
```



### 3. Get a single users


single user by id (admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```



### 4. Get users


get list of users(admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```



### 5. Update a single user


update a user by id (admin)


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON content type |



***Body:***

```js        
{
    "email": "sara@gmail.com"
}
```



---
[Back to top](#devcourses-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-06-25 11:23:13 by [docgen](https://github.com/thedevsaddam/docgen)
=======
<div class="row">

<div class="col-md-12 collection-intro">

### DevCourses API

</div>

<div class="col-md-12">

<div class="col-md-3">

- **[Authentication](#Authentication)**
  - [Get logged in user profile](#jump-Authentication-Getloggedinuserprofile)
  - [Logout user](#jump-Authentication-Logoutuser)
  - [Register user](#jump-Authentication-Registeruser)
  - [Reset password](#jump-Authentication-Resetpassword)
  - [Update password](#jump-Authentication-Updatepassword)
  - [Update user details](#jump-Authentication-Updateuserdetails)
  - [forgotpassword](#jump-Authentication-forgotpassword)
  - [login user](#jump-Authentication-loginuser)
- **[Bootcamps](#Bootcamps)**
  - [Create a bootcamp](#jump-Bootcamps-Createabootcamp)
  - [Delete a bootcamp](#jump-Bootcamps-Deleteabootcamp)
  - [Fetch a single bootcamp](#jump-Bootcamps-Fetchasinglebootcamp)
  - [Fetch all bootcamps](#jump-Bootcamps-Fetchallbootcamps)
  - [Get Bootcamps by distance](#jump-Bootcamps-GetBootcampsbydistance)
  - [Update a bootcamp](#jump-Bootcamps-Updateabootcamp)
- **[Courses](#Courses)**
  - [Create bootcamp course](#jump-Courses-Createbootcampcourse)
  - [Delete a course](#jump-Courses-Deleteacourse)
  - [Fetch all courses](#jump-Courses-Fetchallcourses)
  - [Get a single course](#jump-Courses-Getasinglecourse)
  - [Get courses of bootcamp](#jump-Courses-Getcoursesofbootcamp)
  - [Update a course](#jump-Courses-Updateacourse)
- **[Reviews](#Reviews)**
  - [Add review for bootcamp](#jump-Reviews-Addreviewforbootcamp)
  - [Add review for bootcamp](#jump-Reviews-Addreviewforbootcamp)
  - [Delete review](#jump-Reviews-Deletereview)
  - [Get a single review](#jump-Reviews-Getasinglereview)
  - [Get all reviews](#jump-Reviews-Getallreviews)
  - [Get reviews for a bootcamp](#jump-Reviews-Getreviewsforabootcamp)
  - [Update review](#jump-Reviews-Updatereview)
- **[User](#User)**
  - [Create a user](#jump-User-Createauser)
  - [Delete a user](#jump-User-Deleteauser)
  - [Get a single users](#jump-User-Getasingleusers)
  - [Get users](#jump-User-Getusers)
  - [Update a single user](#jump-User-Updateasingleuser)

</div>

<div class="col-md-9">

<div class="panel panel-default">

<div class="panel-heading">

### Authentication <span class="badge">8</span>

</div>

<div class="panel-body">

Route for user register, logging, reset passowrd etc

<div class="request-item">

<div class="panel-group" id="accordion-Authentication">

<div class="panel panel-info" id="jump-Authentication-Getloggedinuserprofile">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get logged in user profile** | **GET** {{URL}}/api/v1/auth/me

]</div>

<div id="collapse-Authentication-Getloggedinuserprofile" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>get logged in user via token</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "name": "test", "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX", "website": "https://moderntech.com", "phone": "(222) 222-2222", "email": "enroll@moderntech.com", "address": "220 Pawtucket St, Lowell, MA 01854", "careers": ["Web Development", "UI/UX", "Android Development"], "housing": false, "jobAssistance": true, "jobGuarantee": false, "acceptGi": true }</span></div>

</div>

</div>

<div class="panel panel-info" id="jump-Authentication-Logoutuser">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Logout user** | **GET** {{URL}}/api/v1/auth/logout

]</div>

<div id="collapse-Authentication-Logoutuser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Clears token cookie</small>

</div>

</div>

</div>

<div class="panel panel-success" id="jump-Authentication-Registeruser">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Register user** | **POST** {{URL}}/api/v1/auth/register

]</div>

<div id="collapse-Authentication-Registeruser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Add a user to database with encrypted password</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "name": "Natasha hailey", "email": "nat@gmail.com", "password": "123456", "role": "user" }</span></div>

</div>

</div>

<div class="panel panel-warning" id="jump-Authentication-Resetpassword">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Reset password** | **PATCH** {{URL}}/api/v1/auth/resetpassword/6d8614f2b6e603a06f7141211eb875e518c3821f

]</div>

<div id="collapse-Authentication-Resetpassword" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Reset password using a random token via email</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "password": "12345678" }</span></div>

</div>

</div>

<div class="panel panel-warning" id="jump-Authentication-Updatepassword">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update password** | **PATCH** {{URL}}/api/v1/auth/updatepassword

]</div>

<div id="collapse-Authentication-Updatepassword" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Update logged in user password, passing currentPassword and newPassword in the body</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "currentPassword": "123456", "newPassword": "1234567" }</span></div>

</div>

</div>

<div class="panel panel-warning" id="jump-Authentication-Updateuserdetails">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update user details** | **PATCH** {{URL}}/api/v1/auth/updatedetails

]</div>

<div id="collapse-Authentication-Updateuserdetails" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>updates name and email of a user</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "email": "john@gmail.com", "name": "John Doe" }</span></div>

</div>

</div>

<div class="panel panel-success" id="jump-Authentication-forgotpassword">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**forgotpassword** | **POST** {{URL}}/api/v1/auth/forgotpassword

]</div>

<div id="collapse-Authentication-forgotpassword" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>send token for forgetpassword</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "email": "kevin@gmail.com" }</span></div>

</div>

</div>

<div class="panel panel-success" id="jump-Authentication-loginuser">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**login user** | **POST** {{URL}}/api/v1/auth/login

]</div>

<div id="collapse-Authentication-loginuser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>login user and sends back a token</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "email": "publisher@gmail.com", "password": "123456" }</span></div>

</div>

</div>

</div>

</div>

</div>

</div>

<div class="panel panel-default">

<div class="panel-heading">

### Bootcamps <span class="badge">6</span>

</div>

<div class="panel-body">

<div class="request-item">

<div class="panel-group" id="accordion-Bootcamps">

<div class="panel panel-success" id="jump-Bootcamps-Createabootcamp">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Create a bootcamp** | **POST** {{URL}}/api/v1/bootcamps

]</div>

<div id="collapse-Bootcamps-Createabootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Add new bootcamp to database, must be publisher or admin</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "name":"ModernTech Bootcamp", "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX", "website": "https://moderntech.com", "phone": "(222) 222-2222", "email": "enroll@moderntech.com", "address": "220 Pawtucket St, Lowell, MA 01854", "careers": ["Web Development", "UI/UX", "Android Development"], "housing": false, "jobAssistance": true, "jobGuarantee": false, "acceptGi": true }</span></div>

</div>

</div>

<div class="panel panel-danger" id="jump-Bootcamps-Deleteabootcamp">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Delete a bootcamp** | **DELETE** {{URL}}/api/v1/bootcamps/60d32aed202924274054e4bd

]</div>

<div id="collapse-Bootcamps-Deleteabootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Delete a bootcamp from database</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Bootcamps-Fetchasinglebootcamp">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Fetch a single bootcamp** | **GET** {{URL}}/api/v1/bootcamps/60811f14cdea3c17814e2661

]</div>

<div id="collapse-Bootcamps-Fetchasinglebootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Fetch a single bootcamp with ID</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Bootcamps-Fetchallbootcamps">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Fetch all bootcamps** | **GET** {{URL}}/api/v1/bootcamps

]</div>

<div id="collapse-Bootcamps-Fetchallbootcamps" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Fetch all bootcamps with sorting,pagination and filtering</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Bootcamps-GetBootcampsbydistance">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get Bootcamps by distance** | **GET** {{URL}}/api/v1/bootcamps/radius/02118/30

]</div>

</div>

<div class="panel panel-warning" id="jump-Bootcamps-Updateabootcamp">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update a bootcamp** | **PATCH** {{URL}}/api/v1/bootcamps/608125b274703a19cdeaaae2

]</div>

<div id="collapse-Bootcamps-Updateabootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Update a single bootcamp in database</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "housing": true }</span></div>

</div>

</div>

</div>

</div>

</div>

</div>

<div class="panel panel-default">

<div class="panel-heading">

### Courses <span class="badge">6</span>

</div>

<div class="panel-body">

<div class="request-item">

<div class="panel-group" id="accordion-Courses">

<div class="panel panel-success" id="jump-Courses-Createbootcampcourse">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Create bootcamp course** | **POST** {{URL}}/api/v1/bootcamps/60cc446a8dfb5b11c1191d0d/courses

]</div>

<div id="collapse-Courses-Createbootcampcourse" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Create a course for a specific bootcamp</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "title": "Test course 2", "description": "This is a dummy course", "weeks": 6, "tuition": 20000, "minimumSkill": "intermediate", "scholarshipsAvailable": false }</span></div>

</div>

</div>

<div class="panel panel-danger" id="jump-Courses-Deleteacourse">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Delete a course** | **DELETE** {{URL}}/api/v1/courses/60c73c98ca3b821e27fe5d55

]</div>

<div id="collapse-Courses-Deleteacourse" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Delete a course by id</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Courses-Fetchallcourses">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Fetch all courses** | **GET** {{URL}}/api/v1/courses

]</div>

<div id="collapse-Courses-Fetchallcourses" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Get all courses or of a bootcamp</small>

##### Query

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>tuition[lt]</td>

<td>10000</td>

<td></td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Courses-Getasinglecourse">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get a single course** | **GET** {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789

]</div>

<div id="collapse-Courses-Getasinglecourse" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Get a single course by ID</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Courses-Getcoursesofbootcamp">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get courses of bootcamp** | **GET** {{URL}}/api/v1/bootcamps/5d713995b721c3bb38c1f5d0/courses

]</div>

<div id="collapse-Courses-Getcoursesofbootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>get all courses of a particular bootcamp</small>

</div>

</div>

</div>

<div class="panel panel-warning" id="jump-Courses-Updateacourse">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update a course** | **PUT** {{URL}}/api/v1/courses/60cc44ed8dfb5b11c1191d0e

]</div>

<div id="collapse-Courses-Updateacourse" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Update a course by id</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "weeks": 16, "minimumSkill": "advanced" }</span></div>

</div>

</div>

</div>

</div>

</div>

</div>

<div class="panel panel-default">

<div class="panel-heading">

### Reviews <span class="badge">7</span>

</div>

<div class="panel-body">

manage bootcamp reviews

<div class="request-item">

<div class="panel-group" id="accordion-Reviews">

<div class="panel panel-success" id="jump-Reviews-Addreviewforbootcamp">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Add review for bootcamp** | **POST** {{URL}}/api/v1/bootcamps/60d2e58504c33d3131f7f67b/reviews

]</div>

<div id="collapse-Reviews-Addreviewforbootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>post reviews for a specific bootcamp</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "title": "cool bootcamp", "text": "dsjfsd dsfsdjfsd sdfjdsifejif", "rating": 10 }</span></div>

</div>

</div>

<div class="panel panel-success" id="jump-Reviews-Addreviewforbootcamp">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Add review for bootcamp** | **POST** {{URL}}/api/v1/bootcamps/60d2e58504c33d3131f7f67b/reviews

]</div>

<div id="collapse-Reviews-Addreviewforbootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Submit review for a specific bootcamp</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "title": "cool bootcamp", "text": "dsjfsd dsfsdjfsd sdfjdsifejif", "rating": 10 }</span></div>

</div>

</div>

<div class="panel panel-danger" id="jump-Reviews-Deletereview">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Delete review** | **DELETE** {{URL}}/api/v1/reviews/60d2e71204c33d3131f7f67e

]</div>

<div id="collapse-Reviews-Deletereview" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Rempve review from database</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Reviews-Getasinglereview">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get a single review** | **GET** {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be021

]</div>

<div id="collapse-Reviews-Getasinglereview" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Get a review with id from database and populate it with corresponding bootcamp details</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Reviews-Getallreviews">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get all reviews** | **GET** {{URL}}/api/v1/reviews

]</div>

<div id="collapse-Reviews-Getallreviews" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Get all reviews from database and populate it with corresponding bootcamp details</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-Reviews-Getreviewsforabootcamp">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get reviews for a bootcamp** | **GET** {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/reviews

]</div>

<div id="collapse-Reviews-Getreviewsforabootcamp" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>Fetch the reviews for a specific bootcamp</small>

</div>

</div>

</div>

<div class="panel panel-warning" id="jump-Reviews-Updatereview">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update review** | **PATCH** {{URL}}/api/v1/reviews/60d2e71204c33d3131f7f67e

]</div>

<div id="collapse-Reviews-Updatereview" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>update review in database</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "title": "Fucking sheeet" }</span></div>

</div>

</div>

</div>

</div>

</div>

</div>

<div class="panel panel-default">

<div class="panel-heading">

### User <span class="badge">5</span>

</div>

<div class="panel-body">

CRUD functionality for users, available only for the admin

<div class="request-item">

<div class="panel-group" id="accordion-User">

<div class="panel panel-success" id="jump-User-Createauser">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Create a user** | **POST** {{URL}}/api/v1/users

]</div>

<div id="collapse-User-Createauser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>create a user (admin)</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "name": "William", "email": "william@hotmail.com", "password": "123456" }</span></div>

</div>

</div>

<div class="panel panel-danger" id="jump-User-Deleteauser">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Delete a user** | **DELETE** {{URL}}/api/v1/users/60d17a2e5e0aa912c7f02485

]</div>

<div id="collapse-User-Deleteauser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>delete a user by id (Admin)</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "name": "William", "email": "william@hotmail.com", "password": "123456" }</span></div>

</div>

</div>

<div class="panel panel-info" id="jump-User-Getasingleusers">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get a single users** | **GET** {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040

]</div>

<div id="collapse-User-Getasingleusers" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>single user by id (admin)</small>

</div>

</div>

</div>

<div class="panel panel-info" id="jump-User-Getusers">

<div class="panel-heading"><small class="pull-right text-muted"></small>[

#### <span class="glyphicon glyphicon-plus"></span>**Get users** | **GET** {{URL}}/api/v1/users

]</div>

<div id="collapse-User-Getusers" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>get list of users(admin)</small>

</div>

</div>

</div>

<div class="panel panel-warning" id="jump-User-Updateasingleuser">

<div class="panel-heading"><small class="pull-right text-muted">raw</small>[

#### <span class="glyphicon glyphicon-plus"></span>**Update a single user** | **PUT** {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040

]</div>

<div id="collapse-User-Updateasingleuser" class="panel-collapse collapse">

<div class="panel-body">

##### Description

<small></small>

<small>update a user by id (admin)</small>

##### Headers

<table class="table table-hover">

<thead>

<tr>

<th>Key</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Content-Type</td>

<td>application/json</td>

<td>

JSON content type

</td>

</tr>

</tbody>

</table>

##### Body

<span class="resp-prettyprint">{ "email": "sara@gmail.com" }</span></div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<footer class="navbar-default navbar-fixed-bottom">

<div class="container-fluid">

<div class="span12 text-center"><span data-toggle="tooltip" title="If the application help you, please feel free to give a star to the project in github. Your star inspire me to work more on open-source projects like this!">Made with _♥_ by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-06-24 10:13:36 by [docgen](https://github.com/thedevsaddam/docgen)</span></div>

</div>

</footer>

</div>
>>>>>>> a576480 (cleaning fles)
