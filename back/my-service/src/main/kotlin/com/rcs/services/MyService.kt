package com.rcs.services

import com.rcs.models.MyModel
import com.rcs.repos.MyRepository
import org.springframework.stereotype.Service

@Service
class MyService(private val myRepository: MyRepository) {

    fun getMyModels(): Collection<MyModel> {
        return myRepository.findAll().toList()
    }
}
