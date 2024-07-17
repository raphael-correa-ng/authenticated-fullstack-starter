package com.rcs

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class SpringBootApp

fun main(args: Array<String>) {
    SpringApplication.run(SpringBootApp::class.java, *args)
}