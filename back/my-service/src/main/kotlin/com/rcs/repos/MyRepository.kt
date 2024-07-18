package com.rcs.repos

import com.rcs.models.MyModel
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface MyRepository : CrudRepository<MyModel, String?>
