package com.rcs

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class MyServiceSpringBootApp

fun main(args: Array<String>) {
    SpringApplication.run(MyServiceSpringBootApp::class.java, *args)
}