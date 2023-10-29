# Sample code of React + Redux-toolkit + typescript with Clean architecture
This project is a sample code to introduce a Clean Architecture to a web service or to use a Redux Architecture and a Clean Architecture together.

## Use Stack
Typescript, Webpack, React, Redux-toolkit.

## Clean Architecture
<img src=_readme/clean-architecture.png width="800">

As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.

* Distinguish between detailed implementation areas and domain areas.
* Architecture does not depend on the framework.
* The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
* Both high-level and low-level modules rely on abstraction.


* **Entities:** Entities encapsulate business rules or the most general, high-level rules. An entity can be an object with methods or a set of data structures and functions. They are the least likely to change when something external changes.
* **Use Cases:** The use case layer contains application-specific business rules. It encapsulates and implements all use cases of the system.Changes in this layer affect features. This layer should not be affected by changes to externalities such as database, user interface. The use case layer is isolated from these concerns. Changes to the operation of the application do not affect use cases. If the details of a use case change, then some code in that layer will certainly be affected.
* **Interface Adapters:** The adapter layer is a set of adapters that convert data from use case format and entities, to format for an external layers such as database or web.
* **Frameworks and Drivers:** The outermost layer of the model is usually made up of frameworks such as the web framework database.
* **Crossing Boundaries:** At the bottom right of the diagram, the controller and presenters communicating with the use cases in the next layer. The control flow: it starts in the controller, moves through the use case, and then runs through the presenter. Also note the source code dependencies: each points to the use case.


Complying with these simple rules is not difficult, and it will create a system that is testable, maintainable, and with all the benefits that entails. When one of the external parts of the system becomes obsolete, the replacement is done in a minimum of time.

## Clean Architecture Implementation
After the definition of clean architecture in an abstract way, here is the projection of this architecture in the context of a web app described by this diagram:

<img src=_readme/clean-architecture-impl.png width="800">

* Entities and use cases work together and are the center of the system. Communication with the first layer of the Framework is done with DataSource via an interface.

* There are two main parts Business and Framework, the business part is the most important part in the system because it contains the business logic independently of the other parts.

## Run Project
#### Install
```shell
# $ cd /server
$ npm install
$ yarn
```

#### run a server or response api or use ready service

#### Set base url service api for mode development in file .env.development in BASE_API_URL

#### Start
```shell
# $ cd /server
$ npm run dev
```