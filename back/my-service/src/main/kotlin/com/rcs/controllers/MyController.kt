package com.rcs.controllers

import javax.servlet.http.HttpServletRequest;
import com.rcs.models.MyModel
import com.rcs.services.MyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import rcs.auth.api.AuthUtils
import rcs.auth.api.exceptions.UnauthorizedException

@RestController
class MyController(private val myService: MyService, private val authUtils: AuthUtils) {

    @GetMapping("/my-models")
    fun myModels(request: HttpServletRequest): Collection<MyModel> {
        return authUtils.tryGetLoggedInUser(request)
            .map { myService.getMyModels() }
            .orElseThrow { UnauthorizedException() }
    }
}
