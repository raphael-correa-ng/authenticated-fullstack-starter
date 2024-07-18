package com.rcs.controllers

import com.rcs.models.MyModel
import com.rcs.services.MyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MyController(private val myService: MyService) {

    @GetMapping("/my-models")
    fun myModels(): Collection<MyModel> {
        return myService.getMyModels()
    }
}
