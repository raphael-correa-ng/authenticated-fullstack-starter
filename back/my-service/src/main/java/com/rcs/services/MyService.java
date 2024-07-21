package com.rcs.services;

import com.rcs.models.MyModel;
import com.rcs.repos.MyRepository;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    private final MyRepository myRepository;

    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }

    public Iterable<MyModel> getMyModels() {
        return myRepository.findAll();
    }
}
