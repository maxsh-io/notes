---
description: springboot笔记
---

# SpringBoot笔记
## 目录
  - [国际惯例先来一个 Hello World](01_HelloWorld.md)
  - [SpringBoot中的单元测试](02_Test.md)
  - [SpringBoot开发Web应用](02_Web.md)
  - [SpringBoot中使用Jsp](03_Jsp.md)
  - [SpringBoot和Freemarker文件上传](04_Upload.md)
  - [使用SpringBoot上传文件到FastDFS](05_FastDFS.md)
  - [SpringBoot构建RESTful Web服务](06_RESTful.md)
  - [使用Swagger 2 构建API文档](07_Swagger.md)
  - [SpringBoot WebSocket创建聊天室](08_WebSocket.md)
  - [SpringBoot使用JDBC操作数据库](09_Jdbc.md)
  - [SpringBoot集成Mybatis XML 配置版](10_MybatisXML.md)
  - [SpringBoot集成Mybatis 注解版](11_MybatisAnnotation.md)
  - [Spring Data JPA的使用](12_SpringDataJPA.md)
  - [Spring Boot 集成 Druid 监控数据源](13_Druid.md)
  - [Spring Boot 集成 Memcache](14_Memcache.md)
  - [Spring Boot 集成 Redis](15_Redis.md)
  - [Redis 实现Session共享](16_RedisSession.md)
------
<br/><br/><br/><br/><br/><br/>

::: tip Spring、Spring Boot 和 Spring Cloud 的关系
&emsp;&emsp;Spring 最初核心的两大核心功能 Spring IoC 和 Spring Aop 成就了 Spring，Spring 在这两大核心功能上不断地发展，才有了 Spring 事务、Spring MVC 等一系列伟大的产品，最终成就了 Spring 帝国，到了后期 Spring 几乎可以解决企业开发中的所有问题。

&emsp;&emsp;Spring Boot 是在强大的 Spring 帝国生态基础上面发展而来，发明 Spring Boot 不是为了取代 Spring，是为了让人们更容易的使用 Spring。所以说没有 Spring 强大的功能和生态，就不会有后期 Spring Boot 的火热，Spring Boot 使用约定优于配置的理念，重新重构了 Spring 的使用，让 Spring 后续的发展更有生命力。

&emsp;&emsp;Spring 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装并屏蔽掉复杂的配置和实现原理，最终给开发者提供了一套简单易懂、易部署、易维护的分布式系统开发工具包。

&emsp;&emsp;Spring Cloud 是一系列框架的有序集合，它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发。服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。

&emsp;&emsp;Spring Cloud 是为了解决微服务架构中服务治理而提供的具备一系列功能的开发框架，并且 Spring Cloud 是完全基于 Spring Boot 而开发，Spring Cloud 利用 Spring Boot 特性整合了开源行业中优秀的组件，整体对外提供了一套在微服务架构中服务治理的解决方案。

&emsp;&emsp;综上我们可以这样来理解，正是由于 Spring IoC 和 Spring Aop 两个强大的功能才有了 Spring，Spring 生态不断的发展才有了 Spring Boot，使用 Spring Boot 让 Spring 更易用更有生命力，Spring Cloud 是基于 Spring Boot 开发的一套微服务架构下的服务治理方案。
:::
