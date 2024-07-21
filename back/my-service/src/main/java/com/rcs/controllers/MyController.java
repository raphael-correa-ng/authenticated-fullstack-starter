package com.rcs.controllers;

import com.rcs.models.MyModel;
import com.rcs.services.MyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rcs.auth.api.AuthUtils;
import rcs.auth.api.exceptions.UnauthorizedException;

import javax.servlet.http.HttpServletRequest;

@RestController
public class MyController {

    private final MyService myService;
    private final AuthUtils authUtils;

    public MyController(MyService myService, AuthUtils authUtils) {
        this.myService = myService;
        this.authUtils = authUtils;
    }

    @GetMapping("/my-models")
    public Iterable<MyModel> getMyModels(HttpServletRequest request) {
        return authUtils.tryGetLoggedInUser(request)
                .map(user -> myService.getMyModels())
                .orElseThrow(UnauthorizedException::new);
    }
}
